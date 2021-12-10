//const getUsers = 'SELECT u.*, i.url AS image_url FROM svapp_user u JOIN image i ON i.image_id = u.image_id';
const getUsers = 'SELECT u.* AS svapp_user, un AS user_name FROM svapp_user u INNER JOIN user_name un ON un.name_id = u.name_id';
const getPendingUsers = 'SELECT * FROM svapp_user WHERE verified = 0'
//const getUsers = 'SELECT * FROM svapp_user';
//const getUserById = 'SELECT u.* AS svapp_user, i.url AS image_url, un AS user_name FROM svapp_user u INNER JOIN image i ON i.image_id = u.image_id INNER JOIN user_name un ON un.name_id = u.name_id WHERE svapp_user_id = $1';
const getUserById = 'SELECT u.* AS svapp_user, un AS user_name, vi.* AS verification_image FROM svapp_user u INNER JOIN user_name un ON un.name_id = u.name_id INNER JOIN verification_image vi ON vi.id = u.verification_image WHERE u.svapp_user_id = $1'
//const getUserById = 'SELECT * FROM svapp_user WHERE svapp_user_id = $1';
const checkEmailExists = 'SELECT u FROM svapp_user u where u.email = $1';
const addUser = 'INSERT INTO svapp_user (image_id, name_id, usr_ssn, email, phone, guest_points, active, verified, is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const getUserName = 'SELECT * FROM user_name WHERE name_id = $1';
const getUserImage = 'SELECT * FROM image WHERE image_id = $1';
const putUserNotVerified = 'UPDATE svapp_user SET verified = -1 WHERE svapp_user_id = $1';
const putUserPendingVerified = 'UPDATE svapp_user SET verified = 0 WHERE svapp_user_id = $1';
const putUserVerified = 'UPDATE svapp_user SET verified = 1 WHERE svapp_user_id = $1';
const putUserNotActive = 'UPDATE svapp_user SET active = false WHERE svapp_user_id = $1';
const putUserActive = 'UPDATE svapp_user SET active = true WHERE svapp_user_id = $1';
const putUserPaid = 'UPDATE svapp_user SET paid = true WHERE svapp_user_id = $1'



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
    getPendingUsers,
    putUserPaid,
}