import { mount } from '@vue/test-utils';
import Badge from '@/components/ui/Badge.vue';
import { BBadge } from 'bootstrap-vue';

describe('components/ui/Badge.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Badge, { "stubs": { "b-badge": BBadge } });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});