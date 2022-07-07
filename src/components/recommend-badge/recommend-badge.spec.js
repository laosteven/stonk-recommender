import { shallowMount } from '@vue/test-utils';
import { recommendBadge } from './index';

describe('recommendBadge:', () => {
    describe('When recommendBadge is created:', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallowMount(recommendBadge);
        });

        it('Should render;', () => {
            expect(wrapper.find('.recommend-badge').exists()).toBe(true);
        });
    });
});
