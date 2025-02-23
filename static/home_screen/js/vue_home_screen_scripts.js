const { createApp } = Vue;
const app1 = createApp({
    data() {
        return {
            sample: "a"
        }
    },
    compilerOptions: {
        delimiters: ['[[', ']]'],
    }
});

app1.use(PrimeVue.Config, {
    theme: {
        preset: PrimeVue.Themes.Aura,
    },
});
app1.component('p-datepicker', PrimeVue.DatePicker);
app1.mount('#app1');