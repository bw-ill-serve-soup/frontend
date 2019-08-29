import React from 'react';

import { Card, Button, Image } from 'semantic-ui-react';

const CardInventory = props => {

    const [inventory, setInventory] = useState([])

    const editClickHandler = item => {
      console.log('editing item', item) 
      props.history.push(`/edit-item/${item.id}`)
    }

    const deleteClickHandler = item => {
      props.deleteItem(item) 
    }

    
    
    return (
      <div>
         <Card>
        <Card.Content>
          <Card.Header>Bananas</Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>Weight: 3oz</Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Description>Quantity: 3</Card.Description>
        </Card.Content>
        <Card.Content extra widths="equal">
          <Button.Group>
            <Button basic color="blue">
              Edit
            </Button>
            <Button basic color="green">
              Delete
            </Button>
          </Button.Group>
        </Card.Content>
        </Card> 
        </div>
      
    );
}

export default CardInventory;