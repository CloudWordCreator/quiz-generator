const { createApp } = Vue;

const app1 = createApp({
    // setup() {
    //     document.querySelector(".hideBeforeVue").classList.remove("hideBeforeVue");
    // },
    data() {
        return {
            sample: "a"
        }
    },
    compilerOptions: {
        delimiters: ['[[', ']]'],
    },
});

app1.use(PrimeVue.Config, {
    theme: {
        preset: PrimeVue.Themes.Aura,
    },
});
app1.component('p-datepicker', PrimeVue.DatePicker);
app1.mount('#app1');

const speeddial = createApp({
    data() {
        return {
            items: [
                {
                    label: 'home',
                    icon: 'pi pi-home',
                    command: () => {
                        window.location.href = '/home';
                    }
                },
                {
                    label: 'login',
                    icon: 'pi pi-sign-in',
                    command: () => {
                        window.location.href = '/login';
                    }
                },
                {
                    label: 'report',
                    icon: 'pi pi-envelope',
                    command: () => {
                        window.location.href = 'report';
                    }
                },
            ]
        }
    },
});

speeddial.use(PrimeVue.Config, {
    theme: {
        preset: PrimeVue.Themes.Aura,
    },
});
speeddial.component('p-speeddial', PrimeVue.SpeedDial);
speeddial.mount('#speeddial');