var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello',
        newTable: '',
        newTime: '',
        newSubject: '',
        mondays: {
            once: '一限',
            second: '二限',
            third: '三限',
            force: '四限'
        },
        tuesdays: {
            once: '一限',
            second: '二限',
            third: '三限',
            force: '四限'
        },
        wednesdays: {
            once: '一限',
            second: '二限',
            third: '三限',
            force: '四限'
        },
        thursdays: {
            once: '一限',
            second: '二限',
            third: '三限',
            force: '四限'
        },
        fridays: {
            once: '一限',
            second: '二限',
            third: '三限',
            force: '四限'
        },
    },
    methods: {
        addNewTable: function(event){
            this.newTable = $('input[name="week"]').val();
        },
        addNewTime: function(event){
            this.newTime = $('input[name="time"]').val();
        },
        addTable: function(event){
            /*
            if(this.newTable == '' && this.newTime == ''){
                return;
            }
            */
            switch(this.newTable){
                case 't_monday':
                    switch(this.newTime){
                        case '1': 
                            this.mondays.once = this.newSubject;
                            break;
                        case '2': 
                            this.mondays.second = this.newSubject;
                            break;
                        case '3': 
                            this.mondays.third = this.newSubject;
                            break;
                        case '4': 
                            this.mondays.force = this.newSubject;
                            break;
                    };
                    break;
                case 't_tuesday':
                    switch(this.newTime){
                        case '1': 
                            this.tuesdays.once = this.newSubject;
                            break;
                        case '2': 
                            this.tuesdays.second = this.newSubject;
                            break;
                        case '3': 
                            this.tuesdays.third = this.newSubject;
                            break;
                        case '4': 
                            this.tuesdays.force = this.newSubject;
                            break;
                    };
                    break;
                case 't_wednesday':
                    switch(this.newTime){
                        case '1': 
                            this.wednesdays.once = this.newSubject;
                            break;
                        case '2': 
                            this.wednesdays.second = this.newSubject;
                            break;
                        case '3': 
                            this.wednesdays.third = this.newSubject;
                            break;
                        case '4': 
                            this.wednesdays.force = this.newSubject;
                            break;
                    };
                    break;
                case 't_thursday':
                    switch(this.newTime){
                        case '1': 
                            this.thursdays.once = this.newSubject;
                            break;
                        case '2': 
                            this.thursdays.second = this.newSubject;
                            break;
                        case '3': 
                            this.thursdays.third = this.newSubject;
                            break;
                        case '4':
                            this.thursdays.force = this.newSubject;
                            break;
                    };
                    break;
                case 't_friday':
                    switch(this.newTime){
                        case '1': 
                            this.fridays.once = this.newSubject;
                            break;
                        case '2': 
                            this.fridays.second = this.newSubject;
                            break;
                        case '3': 
                            this.fridays.third = this.newSubject;
                            break;
                        case '4': 
                            this.fridays.force = this.newSubject;
                            break;
                    };
                    break;
            }
        }
    }
})