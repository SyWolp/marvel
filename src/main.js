import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import store from '@/store';
import { createMetaManager } from 'vue-meta';

Amplify.configure(awsExports); 
import './index.css';
createApp(App).use(store).use(router).use(createMetaManager()).mount('#app')
