import {
    faHome,
    faCalendarDay,
    faQuestionCircle,
    faMoneyCheckAlt,
    faUsers,
    faCalendarCheck,
    faUserTie,
    faSms,
    faDumbbell,
    faShoppingCart,
    faTools,
    faHistory,
    faMoneyBillAlt,
    faUserPlus,
    faUserCheck
} from '@fortawesome/free-solid-svg-icons'
import { INavbarData } from './helper'

export const navbarData: INavbarData[] = [
    {
        routeLink :'dashboard',
        icon: faHome,
        label:'Dashboard'
    },
    {
        routeLink :'todayaction',
        icon: faCalendarDay,
        label:'Today Action'
    },
    {
        routeLink :'inquiry',
        icon: faQuestionCircle,
        label:'Inquiry'
    },
    {
        routeLink :'member',
        icon: faUsers,
        label:'Member',
        items:[
            {
                routeLink:'member/add',
                icon:faUserPlus,
                label:'Add Member'
            },
            {
                routeLink:'member/active-memb',
                icon:faUserCheck,
                label:'Active Member'
            }
        ]
    },
    {
        routeLink :'payment',
        icon: faMoneyCheckAlt,
        label:'Payment'
    },
    {
        routeLink :'attendance',
        icon: faCalendarCheck,
        label:'Attendance'
    },
    {
        routeLink :'staff',
        icon: faUserTie,
        label:'Staff',
        items:[
            {
                routeLink:'member/add',
                icon:faUserPlus,
                label:'Add Member'
            },
            {
                routeLink:'member/active-memb',
                icon:faUserCheck,
                label:'Active Member'
            }
        ]
    },
    {
        routeLink :'bulksms',
        icon: faSms,
        label:'Bulk SMS'
    },
    {
        routeLink:'expences',
        icon: faMoneyBillAlt,
        label:'Expences',
        items:[
            {
                routeLink:'member/add',
                icon:faUserPlus,
                label:'Add Member'
            },
            {
                routeLink:'member/active-memb',
                icon:faUserCheck,
                label:'Active Member'
            },
            {
                routeLink:'member/add',
                icon:faUserPlus,
                label:'Add Member'
            },
            {
                routeLink:'member/active-memb',
                icon:faUserCheck,
                label:'Active Member'
            },
            {
                routeLink:'member/add',
                icon:faUserPlus,
                label:'Add Member'
            },
            {
                routeLink:'member/active-memb',
                icon:faUserCheck,
                label:'Active Member'
            }
        ]
    },
    {
        routeLink :'exercise',
        icon: faDumbbell,
        label:'Exercise'
    },
    {
        routeLink :'supplementsales',
        icon: faShoppingCart,
        label:'Supplement Sales'
    },
    {
        routeLink :'machine',
        icon: faTools,
        label:'Machines'
    },
    {
        routeLink :'saleshistory',
        icon: faHistory,
        label:'Sales History'
    },
]