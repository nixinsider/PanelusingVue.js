import { ref } from 'vue';
const activeTab = ref('overview');
export function useTabs() {
    function setActiveTab(tabName) {
        activeTab.value = tabName;
    }
    return {
      activeTab,
      setActiveTab
    };
}
