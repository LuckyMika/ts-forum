import type { Rank, RankRelation, User } from "@prisma/client";
import db from "./db";

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


// This function will make a database request!
async function user_has_permission(user: User, permission: Permission) {
	const fetched_user = await db.user.findUnique({
		where: { id: user.id },
		include: { ranks: true },
	});

	if (fetched_user == null) {
		console.log("Invalid user received!");
		return null;
	}

	return rank_relations_have_permission(fetched_user.ranks, permission);
}

function rank_relations_have_permission(rank_relations: RankRelation[], permission: Permission) {
	return rank_relations.some((rank_relation) => rank_relation_has_permission(rank_relation, permission));
}

async function rank_relation_has_permission(rank_relation: RankRelation, permission: Permission) {
	const fetched_relation = await db.rankRelation.findUnique({
		where: { id: rank_relation.id },
		include: { rank: true },
	});

	if (fetched_relation == null) {
		console.log("Invalid rank relation received!");
		return null;
	}

	return rank_has_permission(fetched_relation.rank, permission);
}

function ranks_have_permission(ranks: Rank[], permission: Permission) {
	return ranks.some((rank) => rank_has_permission(rank, permission));
}


function rank_has_permission(rank: Rank, permission: Permission) {
	return rank.permissions & PERMISSIONS_BIT_MASK[permission];
}

export default {
	PERMISSIONS,
	PERMISSIONS_BIT_MASK,

	user_has_permission,
	rank_relations_have_permission,
	rank_relation_has_permission,
	ranks_have_permission,
	rank_has_permission,
}
