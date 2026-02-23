import cors from 'cors';
import express from 'express';
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8030;
const Todo_items = ["Buy groceries", "Clean the house", "Finish homework", "Go for a run", "Read a book", "Cook dinner", "Write a blog post", "Plan a trip"];

app.get('/', (req, res) => {
   return res.json({
    success: true,
    message: 'Server is healthy'
   })
});
app.get('/todo', (req, res) => {
    return res.json({
        success: true,
        data: Todo_items,
        message: 'Todo items retrieved successfully'
    })
});
app.post('/todo', (req, res) => {    
    const { item } = req.body;
    if (!item) {
        return res.json({
            success: false,
            message: 'Item is required'
        });
    }
    Todo_items.push(item);
    return res.json({
        success: true,
        data: item,
        message: 'Todo item added successfully'
    });
});
app.delete('/todo', (req, res) => {    
    const { item } = req.body;
    const index = Todo_items.indexOf(item);
if (index === -1) {
    return res.json({
        success: false,
        message: 'Item not found'
    });
}
else {    Todo_items.splice(index, 1);
    return res.json({
        success: true,
        message: 'Todo item deleted successfully'
    });
}});
app.put('/todo', (req, res) => {    
    const { oldItem, newItem } = req.body;
    const index = Todo_items.indexOf(oldItem);
if (index === -1) {
    return res.json({
        success: false,
        message: 'Item not found'
    });
}
else 
    {   
     Todo_items[index] = newItem;
    return res.json({
        success: true,
        data: newItem,
        message: 'Todo item updated successfully'
    });
}});
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});