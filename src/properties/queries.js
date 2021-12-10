const getProperties = 'SELECT * FROM property';
const getAdressById = 'SELECT ad.* AS address FROM property pr INNER JOIN svapp_user u ON u.svapp_user_id = pr.svapp_user_id INNER JOIN address ad ON pr.address_id = ad.address_id WHERE pr.svapp_user_id = $1'
//const getPropertiesWithAddress = 'SELECT pr.* AS property, ad.* AS address, prr.* AS property_review FROM property pr INNER JOIN address ad ON pr.address_id = ad.address_id INNER JOIN property_review prr ON pr.property_id = prr.property_id'
const getPropertiesWithAddress = 'SELECT ad.* AS address FROM property pr INNER JOIN svapp_user u ON u.svapp_user_id = pr.svapp_user_id INNER JOIN address ad ON pr.address_id = ad.address_id'

module.exports = {
    getProperties,
    getAdressById,
    getPropertiesWithAddress,
}