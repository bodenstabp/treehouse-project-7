const alertBubble = document.getElementsByClassName('alert');
const alertIndicator = document.getElementsByClassName('alert-indicator')[0];
const bellIcon = document.getElementsByClassName('notification-bell')[0]
const alertClose = document.getElementsByClassName('close')

const trafficChart = document.getElementById('traffic-chart').getContext('2d');
const trafficNav = document.getElementsByClassName('traffic-nav');
const trafficNavLink = document.getElementsByClassName('traffic-nav-link');
const dailyTrafficChart = document.getElementById('daily-traffic-chart').getContext('2d');
const mobileUserChart = document.getElementById('mobile-user-chart').getContext('2d');

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

const emailCheckbox = document.getElementById('email-checkbox');
const profileCheckbox = document.getElementById('profile-checkbox');
const timezone = document.getElementById('timezone');
const saveSettings = document.getElementById('save');
const cancelSettings = document.getElementById('cancel');
//Notification Bell and Alert Controls

bellIcon.addEventListener('click', ()=> {
    if (alertIndicator.style.display !== 'none'){
        alertBubble[0].style.display = 'block';
        alertBubble[1].style.display = 'block';
        alertIndicator.style.display = 'none';
    }
  
})

alertClose[0].addEventListener('click', () => {
    alertBubble[0].style.display = 'none';
})

alertClose[1].addEventListener('click', () => {
    alertBubble[1].style.display = 'none';
})

//Traffic Chart Data

const hourlyData = {
    labels: ['12-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9','9-10','10-11','11-12', '12-1', '1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9','9-10','10-11','11-12',],
    datasets: [{
        label: '',
        data: [10,5,5,0,5,10,10,20,30,25,15,30,20,20,30,35,30,45,35,20,30,25,30,15],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(123, 128, 190, 1)',
        borderWidth: 2,
        lineTension: 0,
    }]
};
const hourlyOptions = {
    aspectRatio: 2.5,
    legend: {
        display: false
    },
    scales: {
        xAxes:[{
            // offset: true,
            gridLines:{
            offsetGridLines: true,    
        }
        }],       
        yAxes: [{
            ticks: {
                min: 0,
                max: 50,
            }
        }]
    }
};
const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
    datasets: [{
        label: '',
        data: [300, 400, 200, 225, 125, 600, 500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(123, 128, 190, 1)',
        borderWidth: 2,
        lineTension: 0,
    }]
};
const dailyOptions = {
    aspectRatio: 2.5,
    legend: {
        display: false
    },
    scales: {
        xAxes:[{
            // offset: true,
            gridLines:{
            // offsetGridLines: true,    
        }
        }],   
        yAxes: [{
            ticks: {
                min: 0,
                max: 750,
            }
        }]
    }
};
const weeklyData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        label: '',
        data: [750, 1250, 1000, 1500, 2000, 1500, 1250, 1750, 2250, 1750, 2250],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(123, 128, 190, 1)',
        borderWidth: 2,
        lineTension: 0,
    }]
};
const weeklyOptions = {
    aspectRatio: 2.5,
    legend: {
        display: false
    },
    scales: {
        xAxes:[{
            // offset: true,
            gridLines:{
            offsetGridLines: true,    
        }
        }],
        yAxes: [{
            ticks: {
                min: 0,
                max: 2500,
            }
        }]
    }
};
const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: '',
        data: [11000, 14000, 13500, 14050, 16000, 16200, 15500, 16550, 17000, 15900, 18000, 17250],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderColor: 'rgba(123, 128, 190, 1)',
        borderWidth: 2,
        lineTension: 0,
    }]
};
const monthlyOptions = {
    aspectRatio: 2.5,
    legend: {
        display: false
    },
    scales: {
        xAxes:[{
            // offset: true,
            gridLines:{
            // offsetGridLines: true,    
        }
        }],
        
        yAxes: [{
            ticks: {
                min: 0,
                max: 20000,
            }
        }]
    }
};

// Traffic Chart

let initTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: weeklyData,
    options: weeklyOptions
});

//Traffic Chart Controller

trafficNav[0].addEventListener('click', event => {
    if (!event.target.classList.contains('active') &&event.target !== trafficNav[0]){
        for(i = 0; i < 4; i++) {
            if(trafficNavLink[i].classList.contains('active')){
                trafficNavLink[i].classList.remove('active')
            }
        event.target.classList.add('active')
        }
    }
    if (trafficNavLink[0].classList.contains('active')){
        initTrafficChart.config.data = hourlyData;
        initTrafficChart.options = hourlyOptions;
        initTrafficChart.update();
    } else if (trafficNavLink[1].classList.contains('active')) {
        initTrafficChart.config.data = dailyData;
        initTrafficChart.options = dailyOptions;
        initTrafficChart.update();
    } else if (trafficNavLink[2].classList.contains('active')) {
        initTrafficChart.config.data = weeklyData;
        initTrafficChart.options = weeklyOptions;
        initTrafficChart.update();
    } else if (trafficNavLink[3].classList.contains('active')) {
        initTrafficChart.config.data = monthlyData;
        initTrafficChart.options = monthlyOptions;
        initTrafficChart.update();
    }
});




// Daily Traffic Chart

let initDailyTrafficChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'],
        datasets: [{
            label: '',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(123, 128, 190, 1)',
            borderColor: [],
            borderWidth: [],
        }]
    },
    options: {
        aspectRatio: 2.5,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 250,
                }
            }]
        }
    }
});

// Mobile User Chart

let initMobileUserChart = new Chart(mobileUserChart, {
    type: 'doughnut',
    data: {
        labels: ['Desktops', 'Phones', 'Tablets'],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            backgroundColor: ['#7477BF', '#78CF82', '#51B6C8'],
            borderColor: [],
            borderWidth: 0,
        }]
    },
    options: {
        aspectRatio: 2.5,
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold',
            }
        }
    }
});

// Message User Controls
send.addEventListener('click', () => {
    if(user.value === '' && message.value === ''){
        alert('Please fill out user and message fields before sending');
    } else if (user.value === ''){
        alert('Please fill out user field before sending.');
    } else if (message.value === ''){
        alert('Please fill out message field before sending.');
    } else {
        alert(`Message has been succesfully sent to ${user.value}`)
    }
});

// Local Storageg Controls

saveSettings.addEventListener('click', () => {
    localStorage.setItem('emailCheck', emailCheckbox.checked);
    localStorage.setItem('profileCheck', profileCheckbox.checked);
    localStorage.setItem('timezone', timezone.value)
});

if(window.localStorage.getItem('emailCheck') === 'true') {
    emailCheckbox.checked = true;
} else {
    emailCheckbox.checked = false;
}

if(window.localStorage.getItem('profileCheck') === 'true') {
    profileCheckbox.checked = true;
} else {
    profileCheckbox.checked = false;
}

if(window.localStorage.getItem('timezone' !== null)) {
    timezone.value = window.localStorage.getItem('timezone');
}

cancelSettings.addEventListener('click', () => {
    localStorage.clear();
    emailCheckbox.checked = false;
    profileCheckbox.checked = false;
    timezone.value = null;
});




