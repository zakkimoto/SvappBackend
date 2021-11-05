const getUsers = 'SELECT * FROM svapp_user';
const getUserById = 'SELECT * FROM svapp_user WHERE svapp_user_id = $1';
const checkEmailExists = 'SELECT u FROM svapp_user u where u.email = $1';
const addUser = 'INSERT INTO svapp_user (image_id, name_id, usr_ssn, email, phone, guest_points, active, verified, is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const getUserName = 'SELECT * FROM user_name WHERE name_id = $1';
const getUserImage = 'SELECT * FROM image WHERE image_id = $1';
const putUserNotVerified = 'UPDATE svapp_user SET verified = -1 WHERE svapp_user_id = $1';
const putUserPendingVerified = 'UPDATE svapp_user SET verified = 0 WHERE svapp_user_id = $1';
const putUserVerified = 'UPDATE svapp_user SET verified = 1 WHERE svapp_user_id = $1';
const putUserNotActive = 'UPDATE svapp_user SET active = false WHERE svapp_user_id = $1';
const putUserActive = 'UPDATE svapp_user SET active = true WHERE svapp_user_id = $1';


module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    getUserName,
    getUserImage,
    putUserNotVerified,
    putUserPendingVerified,
    putUserVerified,
    putUserNotActive,
    putUserActive,
}