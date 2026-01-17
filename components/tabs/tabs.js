const openTab = (e, selectedTab) => {
    
    const tabButton = document.querySelectorAll('button');
    tabButton.forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');

    const tabContent = document.querySelectorAll('.active-tab-content');
    tabContent.forEach(tab => tab.classList.replace('active-tab-content', 'tab-content'));

    document.querySelector(selectedTab).classList.replace('tab-content', 'active-tab-content')
}