import React, { useEffect, useState } from 'react';
import { TextField, TextArea, Button, Flex, Text, DropdownMenu } from '@radix-ui/themes';
import { getAllItems } from '../../services/serviceRoutes/itemServices';

const CreateHuntTemplate = () => {
  const [selection, setSelection] = useState({category: "", item: "", id: 0, riddle: ""})
  const [categories, setCategories] = useState([]);
  const [savedItems, setSavedItems] = useState([])
  const [huntName, setHuntName] = useState('');
  const [description, setDescription] = useState('');
  const [ items, setItems ] = useState([])
  const [ filteredItems, setFilteredItems ] = useState([])

  useEffect(() => {
    // TODO: connect to fetch all items
    const fetchAllItems = async () => {
      const response = await getAllItems()
      if (response.status === 200) {
        setItems(response.data)
        console.log(response.data)
        const categoriesList = []
        response.data.map((item) => {
          if (!categoriesList.includes(item.category)) {
            categoriesList.push(item.category)
          }
        })
        // console.log(categoriesList)
        setCategories(categoriesList)
      }
    }
    fetchAllItems()
  }, [])



  const addCategoryItemPair = () => {
    // TODO: connect to api riddle item service
    setCategories([...categories, { category: '', item: '', riddle: '' }]);
  };

  const filterItems = (newCat) => {
    const filtered = items.filter(item => {
      // console.log(selection.category)
      return item.category === newCat
    })
    setFilteredItems(filtered)
    console.log(filtered)
  }

  const handleCategoryChange = (value) => {
    const newSelection = {...selection, category: value}
    setSelection(newSelection)
    console.log(newSelection)
    filterItems(value)
  };

  const handleItemChange = (name, id) => {
    const newSelection = {...selection, item: name, id: id}
    setSelection(newSelection)
  };

  const handleRiddleChange = (value) => {
    const newSelection = {...selection, riddle: value}
    setSelection(newSelection)
  };

  const saveHunt = () => {
    // TODO: Create Hunt API
    console.log('Saving hunt', { huntName, description, categories });
  };

  return (
    <Flex direction="column" align="center" gap="20px" style={{ padding: '20px' }}>
      <Text as="h1" size="6" weight="bold" color="indigo" variant="soft">
        Create a Scavenger Hunt
      </Text>
      <TextField.Root 
        type="text"
        placeholder="Hunt Name"
        value={huntName}
        onChange={(e) => setHuntName(e.target.value)}
        style={{width: '300px'}}
        >
        <TextField.Slot/>
      </TextField.Root>
      <TextArea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{width: '300px', height: '50px'}}
        />

        <Flex direction="column" gap="10px" style={{ width: '100%', maxWidth: '500px', padding: '10px' }}>
          <Flex direction="row" gap="10px" align="center" style={{ justifyContent: 'space-between' }}>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="surface" style={{ width: '48%' }}>
                  {selection?.category || 'Select Category'}
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                {categories.map((category, idx) => (
                  <DropdownMenu.Item key={idx} onSelect={() => handleCategoryChange(category)}>
                    {category}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="surface" style={{ width: '48%' }}>
                  {selection.item || 'Select Item'}
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                {filteredItems.map((item, idx) => (
                  <DropdownMenu.Item key={idx} onSelect={() => handleItemChange(item.name, item.id)}>
                    {item.name}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
          <input
            type="text"
            placeholder="Riddle"
            value={selection.riddle}
            onChange={(e) => handleRiddleChange(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </Flex>

      <Button onClick={addCategoryItemPair} variant="soft" style={{ width: '100%', maxWidth: '500px', cursor: 'default', transition: 'none' }}>
        Add Category & Item
      </Button>
      <Button 
        onClick={saveHunt} 
        variant="surface" 
        style={{ 
          width: '100%', 
          maxWidth: '500px', 
          transition: 'transform 0.2s, background-color 0.2s', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.backgroundColor = '#4B0082';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = ''; 
        }}
      >
        Create Scavenger Hunt
      </Button>
    </Flex>
  );
};

export default CreateHuntTemplate;
