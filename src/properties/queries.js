// öll queries fyrir properties í Postgres Gagnagrun
const getProperties = 'SELECT * FROM property';
const getAdressById = 'SELECT ad.* AS address FROM property pr INNER JOIN svapp_user u ON u.svapp_user_id = pr.svapp_user_id INNER JOIN address ad ON pr.address_id = ad.address_id WHERE pr.svapp_user_id = $1'
const getPropertiesWithAddress = 'SELECT ad.* AS address FROM property pr INNER JOIN svapp_user u ON u.svapp_user_id = pr.svapp_user_id INNER JOIN address ad ON pr.address_id = ad.address_id'

module.exports = {
    getProperties,
    getAdressById,
    getPropertiesWithAddress,
}