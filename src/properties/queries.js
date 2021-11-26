const getProperties = 'SELECT * FROM property';
const getAdressById = 'SELECT u.* AS svapp_user, pr.* AS property, ad.* AS address FROM property pr INNER JOIN svapp_user u ON u.svapp_user_id = pr.svapp_user_id INNER JOIN address ad ON pr.address_id = ad.address_id WHERE pr.svapp_user_id = $1'



module.exports = {
    getProperties,
    getAdressById,
}