const PERMISSIONS = [
	// Users
	"CREATE_THREAD",
	"EDIT_THREAD",
	"DELETE_THREAD",
	"CREATE_COMMENT",
	"EDIT_COMMENT",
	"DELETE_COMMENT",
	"CAST_VOTES",

	// Moderators
	"DELETE_OTHER_THREAD",
	"DELETE_OTHER_COMMENT",
	"LOCK_THREAD",
	"PIN_THREAD",
	"MUTE_USER",
	"UNMUTE_USER",

	// Administrators
	"CREATE_FORUM",
	"EDIT_FORUM",
	"DELETE_FORUM",
	"CREATE_CATEGORY",
	"EDIT_CATEGORY",
	"DELETE_CATEGORY",
	"CREATE_RANK",
	"EDIT_RANK",
	"DELETE_RANK",
	"CHANGE_RANK",
	"BAN_USER",
	"UNBAN_USER",
	"DELETE_USER",
] as const;

// Only the stuff that is inside the PERMISSIONS array; typescript hack
type Permission = typeof PERMISSIONS[number];

// An object which can be indexed by a key that is in the permission type and that has a number as a value
type Index = { [key in Permission]: number };

const PERMISSIONS_BIT_MASK: Index = PERMISSIONS.reduce((accumulated, permission, index) => {
	return { ...accumulated, [permission]: 1 << index };
}, {}) as Index;
//     ^^^^^^^^ "trust me bro the keys are in there"

function is_permission_set(permissions: number, permission: Permission) {
	return (permissions & PERMISSIONS_BIT_MASK[permission]) != 0;
}


function add_permission(permissions: number, permission: Permission) {
	return permissions | PERMISSIONS_BIT_MASK[permission];
}

function remove_permission(permissions: number, permission: Permission) {
	return permissions & ~PERMISSIONS_BIT_MASK[permission];
}

// EXPERIMENTAL!
function toggle_permission(permissions: number, permission: Permission) {
	return permissions ^ PERMISSIONS_BIT_MASK[permission];
}

export default {
	PERMISSIONS,
	PERMISSIONS_BIT_MASK,

	is_permission_set,
	add_permission,
	remove_permission,
	toggle_permission,
}
