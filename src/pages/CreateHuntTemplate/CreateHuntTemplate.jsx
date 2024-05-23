import React, { useState } from 'react';
import { Box, Button, Flex, Text, DropdownMenu } from '@radix-ui/themes';

const CreateHuntTemplate = () => {
  const [categories, setCategories] = useState([{ category: '', item: '', riddle: '' }]);
  const [huntName, setHuntName] = useState('');
  const [description, setDescription] = useState('');

  const addCategoryItemPair = () => {
    setCategories([...categories, { category: '', item: '', riddle: '' }]);
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].category = value;
    setCategories(newCategories);
  };

  const handleItemChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].item = value;
    setCategories(newCategories);
  };

  const handleRiddleChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index].riddle = value;
    setCategories(newCategories);
  };

  const saveHunt = () => {
    // Logic to save the scavenger hunt
    console.log('Saving hunt', { huntName, description, categories });
  };

  return (
    <Flex direction="column" align="center" gap="20px" style={{ padding: '20px' }}>
      <Text as="h1" size="6" weight="bold" color="indigo" variant="soft">
        Create a Scavenger Hunt
      </Text>
      <input
        type="text"
        placeholder="Name"
        value={huntName}
        onChange={(e) => setHuntName(e.target.value)}
        style={{ width: '100%', maxWidth: '500px', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '100%', maxWidth: '500px', padding: '10px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      {categories.map((catItem, index) => (
        <Flex key={index} direction="column" gap="10px" style={{ width: '100%', maxWidth: '500px' }}>
          <Flex direction="row" gap="10px" style={{ justifyContent: 'space-between' }}>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="surface" style={{ width: '48%' }}>
                  {catItem.category || 'Select Category'}
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                {/* Example categories; replace with IMAGENET categories */}
                {['Category1', 'Category2', 'Category3'].map((category, catIndex) => (
                  <DropdownMenu.Item key={catIndex} onSelect={() => handleCategoryChange(index, category)}>
                    {category}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="surface" style={{ width: '48%' }}>
                  {catItem.item || 'Select Item'}
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                {/* Example items; replace with items from selected category */}
                {['Item1', 'Item2', 'Item3'].map((item, itemIndex) => (
                  <DropdownMenu.Item key={itemIndex} onSelect={() => handleItemChange(index, item)}>
                    {item}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
          <input
            type="text"
            placeholder="Riddle"
            value={catItem.riddle}
            onChange={(e) => handleRiddleChange(index, e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </Flex>
      ))}
      <Button onClick={addCategoryItemPair} variant="soft" style={{ width: '100%', maxWidth: '500px' }}>
        Add Category & Item
      </Button>
      <Button onClick={saveHunt} variant="solid" color="indigo" style={{ width: '100%', maxWidth: '500px' }}>
        Create Scavenger Hunt
      </Button>
    </Flex>
  );
};

export default CreateHuntTemplate;
