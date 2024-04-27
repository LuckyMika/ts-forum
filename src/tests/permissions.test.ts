import { describe, test, expect } from '@jest/globals';
import { PERMISSIONS, is_permission_set } from "$lib/permissions";

describe("is_permission_set", () => {
	test("always returns false on an empty permission field", () => {
		for (const permission of PERMISSIONS) {
			expect(is_permission_set(0, permission)).toBe(false);
		}
	})
})
