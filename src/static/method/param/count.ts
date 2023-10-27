import type {BaseObject} from '@toreda/types';
import {TestCase} from '../../../test/case';
import type {TestCaseData} from '../../../test/case/data';

/**
 * @category Prefabs
 */
export class StaticMethodParamCount extends TestCase<unknown, boolean> {
	constructor(data: TestCaseData<unknown, boolean>) {
		super(data);
	}

	public async run(instance: unknown, methodName: string, expected: number): Promise<void> {
		it(this.label, () => {
			const o = instance as BaseObject;
			expect(o).toBeDefined();
			expect(o.prototype).toBeDefined();

			const method = o[methodName] as BaseObject;
			expect(method).not.toBeUndefined();
			expect(method.length).toBe(expected);
		});
	}
}