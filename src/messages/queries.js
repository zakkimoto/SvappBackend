//const getMessages = 'SELECT m.*, u.* FROM messages m INNER JOIN svapp_user u ON m.user_id = u.svapp_user_id ORDER BY m.done DESC';
const getMessages = 'SELECT m.*, u.* FROM messages m INNER JOIN svapp_user u ON m.user_id = u.svapp_user_id WHERE answer IS NULL';
const getActiveMessages = 'SELECT * FROM messages WHERE answer IS NULL';
const patchMessage =  'UPDATE messages SET answer=$2 WHERE id = $1'; 
const getMessageById = 'SELECT * FROM messages WHERE id = $1';




module.exports = {
    getMessages,
    getMessageById,
    patchMessage,
    getActiveMessages,

}