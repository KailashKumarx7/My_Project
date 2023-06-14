
import { faCloudDownload, faCloudUpload, faCog, faPowerOff, faTrash, faUser, faUserLock} from '@fortawesome/free-solid-svg-icons';

export const languages = [
    {
        language: 'English',
        flag: 'us-flag'
    },
    {
        language: 'Nepal',
        flag: 'nepal-flag'
    },
    {
        language: 'India',
        flag: 'india-flag'
    },
    {
        language: 'Pakistan',
        flag: 'pakistan-flag'
    },
    {
        language: 'Bhutan',
        flag: 'bhutan-flag'
    },
    {
        language: 'Chaina',
        flag: 'chaina-flag'
    }
];


export const notifications = [
    {
        icon:faCloudDownload,
        subject: 'Download complete',
        description:'lorem isp bikash board home shell'
    },
    {
        icon:faCloudUpload,
        subject: 'Upload complete',
        description:'lorem isp bikash board home shell'
    },
    {
        icon:faTrash,
        subject: '350 mb trash files',
        description:'lorem isp bikash board home shell'
    },
];

export const userItems = [
    {
        icon: faUser,
        label:'Profile'
    },
    {
        icon: faCog,
        label:'Settings'
    },
    {
        icon: faUserLock,
        label:'Lock screen'
    },
    {
        icon: faPowerOff,
        label:'Logout'
    },
]