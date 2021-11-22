const getMessages = 'SELECT * FROM messages';
const getActiveMessages = 'SELECT * FROM messages WHERE done = false';
const putMessage =  'UPDATE messages .... WHERE id = $1'; // TODO
const getMessageById = 'SELECT * FROM messages WHERE id = $1';



module.exports = {
    getMessages,
    getMessageById,
    putMessage,
    getActiveMessages
}