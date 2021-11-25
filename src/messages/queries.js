const getMessages = 'SELECT m.*, u.* FROM messages m INNER JOIN svapp_user u ON m.user_id = u.svapp_user_id WHERE m.done = false';
const getActiveMessages = 'SELECT * FROM messages WHERE done = false';
const patchMessage =  'UPDATE messages SET answer=$2 WHERE id = $1'; 
const getMessageById = 'SELECT * FROM messages WHERE id = $1';



module.exports = {
    getMessages,
    getMessageById,
    patchMessage,
    getActiveMessages
}