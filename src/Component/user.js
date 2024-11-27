import user from '../json/permission.json';

/**
 * ดึงข้อมูลผู้ใช้ทั้งหมดในระบบ
 * @returns {Array<Object>} รายการผู้ใช้ทั้งหมดที่มีรายละเอียดผู้ใช้ เช่น ชื่อผู้ใช้ รหัสผ่าน บริษัท และบทบาท
 */
function getAllUser() {
    return Object.entries(user).map(([key, value]) => {
        return Object.entries(value).map(([keys, values]) => {
            return {
                username : keys,
                display_name: values["display_name"],
                branch: values["branch"],
            };
        });
    }).flat(2);
}

/**
 * ดึงรายชื่อผู้ใช้ในบริษัท
 * @param {string} Com บริษัท
 * @returns {Array<Object>} รายชื่อผู้ใช้ในบริษัทที่มีรายละเอียดผู้ใช้ เช่น ชื่อผู้ใช้ ชื่อเต็ม และสาขา
 */
function getCompanyUser(Com) {
    return Object.entries(user[Com]).map(([key, value]) => {
            return {
                username : key,
                display_name: value["display_name"],
                branch: value["branch"],
            };
    });
}

export { getAllUser, getCompanyUser };