export interface Photo {
    filename: string;
    caption?: string;
    orientation: "v" | "h" | "override";
    maxW?: string;
}

export interface PhotoFolder {
    year: number;
    month: string;
    photos: Photo[];
    subfolders?: Subfolder[];
}

export interface Subfolder {
    name: string;
    url?: string;
    photos?: Photo[];
}

// For "filename", can either be a URL or a path to a file in `public/gallery/2025/08`
// {
//     filename: "",
//     caption: "",
//     orientation: "v"
// }
export const photoFolders: PhotoFolder[] = [
    {
        year: 2025,
        month: "12",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260464/IMG_9539_miyu3n.jpg",
                caption: "back in ithaca",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260464/IMG_9564_eh0ooq.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260469/IMG_9575_wehndz.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260464/IMG_9584_c8uc9v.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260464/IMG_9607_m7wl7y.jpg",
                caption: "zzz",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260466/IMG_9619_sldzfj.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260466/IMG_9628_gbfki4.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260470/IMG_5155_newkwm.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260480/IMG_1428_f88r0o.jpg",
                caption: "one more felly",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260470/IMG_9687_gnfzai.jpg",
                caption: "king jonah",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260474/IMG_9699_u6gxnn.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260468/IMG_9716_wanpcp.jpg",
                caption: "lab secret santa",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260466/IMG_9723_kqopkj.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260468/IMG_9717_ra4vug.jpg",
                caption: 'lauren\'s "cheatsheet"',  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260474/IMG_9728_tfyj87.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260470/IMG_9752_quntlm.jpg",
                caption: "haozheng's cooking",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260470/IMG_9766_b6pmpp.jpg",
                caption: "jiajun & fiona",  
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260473/IMG_9773_ve7ofu.jpg",
                caption: "in the studio",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260475/IMG_9792_u7bbgr.jpg",
                caption: "derek visits",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260472/IMG_9805_mwymav.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260475/IMG_9831_zrzxpz.jpg",
                caption: "bday dinner",  
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260478/IMG_1536_ppxdqm.jpg",
                caption: "",  
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260474/IMG_9837_rbvaft.jpg",
                caption: "",  
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1766260476/IMG_9842_kay8og.jpg",
                caption: "last hangout for a while",  
                orientation: "v"
            },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // },
            // {
            //     filename: "",
            //     caption: "",  
            //     orientation: "v"
            // }
        ]
    },
    {
        year: 2025,
        month: "11",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539410/IMG_9138_mbfvkg.jpg",
                caption: "welcome november",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539417/IMG_9143_fdbg9i.jpg",
                caption: "kaileb.",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539419/IMG_9169_vwqz5o.jpg",
                caption: "jason + aiden.",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539422/IMG_9188_bvn8dl.jpg",
                caption: "tacos cdmx",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539423/IMG_9210_uwy3l9.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764687329/IMG_9227_nuw1kh.jpg",
                caption: "first snow",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539411/IMG_9247_ez7vlm.jpg",
                caption: "asked me to cook",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539424/IMG_9258_rhfpfb.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539899/IMG_9505_svnwo2.jpg",
                caption: "peeping tom",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539412/IMG_9292_zynb6u.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539414/IMG_9299_cvfp7f.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539426/IMG_9338_ptkqc8.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539427/IMG_9339_zfldoh.jpg",
                caption: "elisabeth's 22nd",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539429/IMG_9363_cas7is.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539431/IMG_9380_riajd2.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764687667/IMG_9383_gegx8p.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539433/IMG_9390_Afterlight_eqsfib.jpg",
                caption: "thanksgiving",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539435/IMG_9404_d5amiw.jpg",
                caption: "cravings",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539437/IMG_9459_qltpwp.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539434/IMG_9482_qfxjju.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539440/IMG_9487_iiogqw.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539416/IMG_9496_r14olf.jpg",
                caption: "thanks mundelein",
                orientation: "v"
            }
        ]
    },
    {
        year: 2025,
        month: "10",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538311/IMG_8723_ahg0hv.jpg",
                caption: "ethan.",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538305/IMG_8748_zpjtmj.jpg",
                caption: "lunar new year",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538314/IMG_8750_jrokux.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538334/IMG_8772_dg4hgi.jpg",
                caption: "watkins glen",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538316/IMG_8784_jfpqza.jpg",
                caption: "watershed",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538310/IMG_4467_spkbvj.jpg",
                caption: "frosty cow",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538313/IMG_8833_okzlke.jpg",
                caption: "Jason('s collection)",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538317/IMG_8848_g5vyc3.jpg",
                caption: "bye gary",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538329/IMG_8879_bpjdhi.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538332/R0015748_ecdlg5.jpg",
                caption: "er fall retreat",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538320/IMG_8902_kxkis5.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538327/R0016138_ffxuav.jpg",
                caption: "losing team",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538318/IMG_8923_ancr3z.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538330/IMG_8965_lvjj1y.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538321/IMG_8984_hub0jp.jpg",
                caption: "lucas.",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538307/IMG_8998_u7edzz.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538311/IMG_0907_zdiaos.jpg",
                caption: "derek's back",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538768/IMG_9054_ywbimd.jpg",
                caption: "wine & cheese night",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538322/IMG_9078_ts8tsm.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538308/IMG_9106_v9gcsz.jpg",
                caption: "my pancakes",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538324/IMG_9113_npdhtm.jpg",
                caption: "bye derek",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764538325/IMG_9121_mnfc08.jpg",
                caption: "paul.",
                orientation: "v"
            },

        ]
    },
    {
        year: 2025,
        month: "09",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536404/1_msm67p.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536400/2_wrz4yg.jpg",
                caption: "cass park",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536400/3_txqf9s.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536403/4_ggyqep.jpg",
                caption: "kaitlin's cooking",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536406/5_wmmidz.jpg",
                caption: "stewart park",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536401/6_c3wqw7.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536404/7_nsgbjc.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536405/8_t14y67.jpg",
                caption: "airport 5k",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536406/9_hktrhh.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536407/10_pvmhhr.jpg",
                caption: "taverna banfi",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536409/11_yctori.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536407/13_lmr5oj.jpg",
                caption: "indian creek farm",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764683972/IMG_5822_ml5s89.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536406/12_xalxsw.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764684155/IMG_8538_iic6sz.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764684157/IMG_8547_ikljhm.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536409/14_wsnvy0.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536408/15_c8j19n.jpg",
                caption: "bye derek",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536411/16_hvbigb.jpg",
                caption: "cutest cornell fitness worker",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536410/17_xjfv3t.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536410/18_gft6cg.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536411/19_bq9bpc.jpg",
                caption: "",
                orientation: "v"
            }
        ]
    },
    {
        year: 2025,
        month: "08",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537173/1_najtrt.jpg",
                caption: "trip to sd",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537174/2_f2dzf7.jpg",
                caption: "Mundelein",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537171/3_rsfime.jpg",
                caption: "The real doctakim",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537171/4_wdipbk.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537171/5_tckq3u.jpg",
                caption: "A glimpse into our future",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537172/6_smixrb.jpg",
                caption: "david & goliath",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764684899/IMG_8073_hhyh8o.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537179/7_qjnt6k.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537174/8_j88kxc.jpg",
                caption: '"Theo! keep your hands to... yourself?"',
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537176/9_xfi5o2.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541888/IMG_8185_kwj5zm.jpg",
                caption: "ithaca year 5",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537175/10_dk5s78.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764685088/IMG_8190_cvsluv.jpg",
                caption: "thanks melody",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537178/11_c2oaxc.jpg",
                caption: "ms chapter 1",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537177/12_dajpws.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764537172/13_ypr8l8.jpg",
                caption: "tsitp",
                orientation: "v"
            }
        ]
    },
    {
        year: 2025,
        month: "07",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541465/IMG_7606_kmo3u2.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541460/IMG_7608_mv98a4.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541460/IMG_7623_zavp5x.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764685533/IMG_7632_r0zo0e.jpg",
                caption: "secrets",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541461/IMG_7662_lv6gat.jpg",
                caption: "prayer? posture",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541458/IMG_7673_hc3bjq.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541462/IMG_7682_irbkbf.jpg",
                caption: "mayleen",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541458/IMG_7717_xmdmdr.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541465/IMG_7752_xtjzdw.jpg",
                caption: "trip to sd",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541467/IMG_7781_cml84q.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541464/IMG_7779_jg1vyy.jpg",
                caption: "super soft",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541466/IMG_7798_ylbozw.jpg",
                caption: "the handoff",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541464/IMG_7816_slyb2x.jpg",
                caption: "munch munch",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541467/IMG_7817_pfjf6z.jpg",
                caption: "",
                orientation: "v"
            }
        ]
    },
    {
        year: 2025,
        month: "06",
        photos: [],
        subfolders: [
            {
                name: "Korea.zip", photos: [
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556711/IMG_6646_nsgnld.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556714/IMG_6648_pexkky.jpg",
                        caption: "mosaic 2025",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556712/IMG_6656_wkcj0j.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556718/IMG_6661_mbadin.jpg",
                        caption: "16동",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556708/441C32B7-D10A-41A4-B8E9-F2A290C1E6C8_i3oox7.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556709/IMG_0054_te7z10.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556716/IMG_6681_wk8mad.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554235/IMG_6693_ldu5mm.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554236/IMG_6704_i8xwcl.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554237/IMG_6712_o41stt.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554233/IMG_6726_aigyle.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554237/IMG_6738_xrqvej.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554242/IMG_6742_rn8zml.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554242/IMG_6751_ovztfg.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554232/IMG_6791_z0mrxu.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554246/IMG_6794_wl326u.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554232/DSCF1766_bylkue.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554241/IMG_6802_tococ7.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554250/IMG_6807_ysaxvs.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554239/AfterlightImage_nomhob.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554247/IMG_6846_surfhr.jpg",
                        caption: "Miles",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554249/IMG_6866_dsileu.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554235/IMG_6887_moqwiz.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554246/IMG_6892_s993ui.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554232/AA0E1C6F-3146-4D4B-9778-2FA3C022FBB5_mqztyt.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554232/EEC605C4-BD54-4F21-AC32-7FF28338CC06_p5cvbt.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554241/IMG_6897_movp6a.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554231/att.t7HK7P4sGW24yr_yvSN7mRNtFufYEEduXJKE75FZ8cU_mhfbgb.jpg",
                        caption: "Relationships I've cherished since 2019",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554233/IMG_6945_j929ma.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554243/IMG_6960_lufmcr.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554234/IMG_6980_ml2toa.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554236/IMG_6977_tuayeq.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554246/IMG_6985_erdax7.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554249/IMG_6986_uapyrr.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554249/IMG_6998_gjqbrk.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764554247/IMG_8929_squvc1.jpg",
                        caption: "",
                        orientation: "h"
                    },
                ]
            },
            {
                name: "Japan.zip", photos: [
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555138/IMG_8931_rtcwsb.jpg",
                        caption: "to osaka",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555140/IMG_7017_fsyw2s.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555139/IMG_7018_kow8ir.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555140/IMG_7025_luzkcr.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555136/IMG_7028_esz7ov.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555141/IMG_7030_vw1m7u.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555153/IMG_7107_vktg1d.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555136/IMG_7048_ptz3md.jpg",
                        caption: "whoops.",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555142/IMG_7058_whd2mk.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555133/IMG_0083_pqplv1.jpg",
                        caption: "'Do I buy the shoe? Or not?'",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555143/IMG_7090_lequk1.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555143/IMG_7093_rx5hrp.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555145/IMG_7099_mucxot.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555133/IMG_0123_bmmhdd.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555146/IMG_7111_f5pnme.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555147/IMG_7142_nompve.jpg",
                        caption: "to tokyo",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555135/IMG_0154_thgaha.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555147/IMG_7171_ksaxfi.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555148/IMG_7184_vfrjsc.jpg",
                        caption: "Aunt's favorite bingsoo",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555149/IMG_7205_ca0iln.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555151/IMG_7208_syir6r.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555136/IMG_7214_kdvggj.jpg",
                        caption: "essentials",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555135/IMG_0194_wqziyo.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555134/IMG_0186_sscesq.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555152/IMG_7240_pjrtzj.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555137/IMG_7244_j2dkqr.jpg",
                        caption: "pretty good",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555653/IMG_7264_dyq9ki.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555654/IMG_0180_mea1n1.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555654/IMG_7272_cikmjn.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764555655/IMG_7275_a8acr1.jpg",
                        caption: "bye japan",
                        orientation: "v"
                    }
                ]
            },
            {
                name: "Brisbane.zip", photos: [
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556031/IMG_7282_dvopdo.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556032/IMG_7285_lauplx.jpg",
                        caption: "club aurora",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556033/IMG_7297_kkkkkc.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556035/IMG_7311_xj206w.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556033/IMG_7334_x9vbgz.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556027/IMG_7335_nwlx6q.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556036/IMG_7353_bqyyue.jpg",
                        caption: "side of vegemite",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556027/IMG_7362_oel7rd.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556028/IMG_7374_mi92ii.jpg",
                        caption: "flat white",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556029/IMG_7377_bqkvf1.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556038/IMG_7380_nniufq.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556036/IMG_7384_uckgmi.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556057/IMG_7393_kdehul.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556049/IMG_7438_zcp7ji.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556042/IMG_7450_hbx8t1.jpg",
                        caption: "pure joy",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556055/IMG_7464_drh7sp.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556049/IMG_7475_gyzg94.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556045/IMG_7482_hsfnn9.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556039/IMG_7485_xcsvch.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556040/IMG_7495_qdmjgt.jpg",
                        caption: "felons brewery",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556047/IMG_7501_btusnh.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556043/IMG_7505_lq7xrk.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556050/IMG_7519_zfpu22.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556029/IMG_7524_spwyob.jpg",
                        caption: "coco lab",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556050/IMG_7538_noyfnw.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556052/IMG_7548_joz9op.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556030/IMG_7555_ovqxdw.jpg",
                        caption: "best gyro i've tried",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764556043/IMG_7567_vdeupy.jpg",
                        caption: "thanks brisbane",
                        orientation: "v"
                    }
                ]
            }
        ]
    },
    {
        year: 2025,
        month: "05",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559418/IMG_6077_yj015s.jpg",
                caption: "saturday 4pm cg",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559420/IMG_6117_o8kwvi.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559421/IMG_6132_yowzzx.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559422/IMG_6135_fjz6y9.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559436/IMG_6144_m02cmn.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559425/IMG_6148_alinb4.jpg",
                caption: "last aaiv felly dessert",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559471/MargaretTsai-AAIVSP25FELLY-135_ojvcik.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559487/MargaretTsai-AAIVSP25FELLY-355_mvwvwl.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559487/MargaretTsai-AAIVSP25FELLY-409_wjwegy.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559459/IMG_6172_sfcx8e.jpg",
                caption: "slope day",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559439/IMG_6182_clbsrv.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559433/e8528d3f70c59a46e6662f1af01e28c3_gvszsl.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559473/R0009340_pl5fch.jpg",
                caption: "er senior appreciation",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559474/R0008948_cfdanu.jpg",
                caption: "ellie + andrew's monday 7:30pm cg",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559476/R0008982_irjb5x.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559490/DSC03778_nzn5t3.jpg",
                caption: "gina + david's saturday 4pm cg (david not present)",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559478/DSC02939_xyzkpp.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559480/IMG_3575_aat0so.jpg",
                caption: "smart freshmen",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559433/DSC03827_j0zrx5.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559445/IMG_6249_sntmnf.jpg",
                caption: "special sesame sauce",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559462/IMG_6295_wk9vhz.jpg",
                caption: "cg picnic (david present)",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559410/AfterlightImage_zpligl.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559441/IMG_6305_lduels.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559450/IMG_6318_flrsvu.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559486/IMG_6323_owyiqx.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559482/IMG_6331_lh8sg9.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559425/IMG_6338_icrnnr.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559442/IMG_6342_ta9xyn.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559483/IMG_6400_yxanhm.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559428/IMG_6406_g1mvnu.jpg",
                caption: "...yikes",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559453/IMG_6428_rftxy5.jpg",
                caption: "convocation",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559445/IMG_6502_noglzn.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559446/IMG_6482_cwljeu.jpg",
                caption: "grad photos",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559429/IMG_6507_iy2gqu.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559460/IMG_6522_iwrpvz.jpg",
                caption: "think i got 3/10",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559463/IMG_6527_zkxp2f.jpg",
                caption: "math graduation's 'continental' breakfast",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559456/IMG_6528_vfaq7e.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559435/IMG_1805_kifxt4.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559408/2025_SaturdayWalk_Candid__47_rxqypm.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559464/IMG_6571_jzz9sn.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559412/DSCF1459_ufwezy.jpg",
                caption: "commencement",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559468/IMG_6584_f50c2g.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559416/IMG_1828_xtm7gu.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559417/IMG_2346_sfqkch.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559438/IMG_2358_m1d9va.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559412/DSCF1500_wlrz2e.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764559413/DSCF1536_wjqm5t.jpg",
                caption: "",
                orientation: "h"
            }
        ],
        subfolders: [
            {
                name: "grad-photos.zip",
                photos: [
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558009/DSC05764_uj4qyq.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558009/DSC05517_cmm5sp.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558003/DSC05787_bzzsnw.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558012/DSC05813_bebrlc.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558041/DSC05910_dlvehv.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558050/DSC05917_qgy3rh.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558010/DSC05888_y3ew1q.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558044/DSC05950-Enhanced-NR_q6rrbu.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558007/IMG_2465_rsjtbk.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558014/IMG_2481_nwdwh1.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558013/IMG_2518_k6syxf.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558022/IMG_2856_r7vumx.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558019/IMG_2691_uuu0fs.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558021/IMG_2724_ua7uau.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558016/IMG_2541_zzjard.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558018/IMG_2590_weioyt.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558024/IMG_2776_jcd2od.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558004/IMG_2757_xqfw3z.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558006/IMG_3131_wvtz5k.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558025/IMG_3272_tmpfxf.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558030/IMG_3310_bkiiwc.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558027/IMG_3378_irfzii.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558028/IMG_3380_gptxxm.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558006/IMG_3536_o26tow.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558032/IMG_3400_dfgdzz.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558034/IMG_3505_sabvmr.jpg",
                        caption: "4 years and counting",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558048/MargaretTsai-AAIVGrad-2_r9wrqx.jpg",
                        caption: "aaiv seniors",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558039/MargaretTsai-AAIVGrad-40_lf8xfw.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558035/MargaretTsai-AAIVGrad-49_og9fuw.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558038/MargaretTsai-AAIVGrad-75_ymsbfa.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558041/MargaretTsai-AAIVGrad-71_zhf5yi.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558047/MargaretTsai-AAIVGrad-55_o52lbt.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764558044/MargaretTsai-AAIVGrad-61_kltfdn.jpg",
                        caption: "thanks aaiv",
                        orientation: "h"
                    }

                ]
            }
        ]
    },
    {
        year: 2025,
        month: "04",
        photos: [
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642109/IMG_7889_l6yons.jpg",
                caption: "grace's 22nd",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642082/IMG_5729_jnbuy2.jpg",
                caption: "paul.",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642088/IMG_5733_ava6yn.jpg",
                caption: "not sure what happened to jaden",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642078/IMG_5754_lbhp6u.jpg",
                caption: "april bdays",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642084/IMG_5759_gvfklw.jpg",
                caption: "er coffeehouse",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642079/IMG_5761_itrsh4.jpg",
                caption: "derek can you put that down for a moment",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642120/IMG_5806_ed2hym.jpg",
                caption: "spring",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642089/IMG_5807_pe3fev.jpg",
                caption: "jiajun",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642091/IMG_5822_n42zfc.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642087/IMG_5825_c2c5rl.jpg",
                caption: "during sunday service",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642118/IMG_5834_lkbawx.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642090/IMG_5838_mjajho.jpg",
                caption: "ignite",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642092/IMG_5846_ckjave.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642108/IMG_5851_w5y2x8.jpg",
                caption: "gary visits",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642093/IMG_5857_n4ndpk.jpg",
                caption: 'gary asked "the halal brothers" if they were brothers',
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642080/IMG_5867_rsx8uh.jpg",
                caption: "unideal sleeping arrangement",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642105/IMG_5876_l1v1vt.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642101/IMG_5877_gvpzmf.jpg",
                caption: "the trial",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642096/IMG_5891_gdoe2w.jpg",
                caption: "the reward",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642104/IMG_5894_idk1q1.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642119/IMG_5895_mpb9dz.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642113/IMG_5898_udnwc2.jpg",
                caption: "gary's last night",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642096/IMG_5916_mqqngs.jpg",
                caption: "paul's first froyo",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642100/IMG_5934_hyswmh.jpg",
                caption: "cass's 22nd",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642106/IMG_5940_fbtkzb.jpg",
                caption: "fav emcee",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642096/IMG_5942_byh2wu.jpg",
                caption: "simon visits",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642101/IMG_5957_jmt5mj.jpg",
                caption: "baptism sunday",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642113/IMG_5959_njrhhs.jpg",
                caption: "er picnic",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642098/IMG_5966_p2ixl2.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642122/IMG_5967_ozmgsl.jpg",
                caption: "still under construction",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642110/IMG_5968_iapseh.jpg",
                caption: "eric visits",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642108/IMG_5974_qqad3q.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642081/IMG_6059_o3n6td.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642122/IMG_6071_dhgrf8.jpg",
                caption: "",
                orientation: "v"
            }
        ],
        subfolders: [
            {
                name: "spring-break-2025.zip", photos: [
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642994/IMG_5351_f925ri.jpg",
                        caption: "first stop",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642997/IMG_5354_wuyfka.jpg",
                        caption: "uncle dan's home",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642972/IMG_0171_ggle60.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643027/IMG_5362_pvwzgk.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642999/IMG_5364_u15xid.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643030/IMG_5367_k5rnir.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642980/IMG_5406_nuad79.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642981/IMG_5408_badzaf.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642989/IMG_6284_tmdzpq.jpg",
                        caption: "uncle dan",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642997/IMG_5375_telvrg.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643000/IMG_5379_ed7ix0.jpg",
                        caption: "late night snack pt.1",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642992/IMG_8099_xgohdm.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642978/IMG_5385_otksbo.jpg",
                        caption: "derek insisted we go to an aquarium",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642991/IMG_8096_nbw7f6.jpg",
                        caption: "for the aesthetic",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643000/IMG_5390_xquh7f.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642979/IMG_5402_yubgl3.jpg",
                        caption: "'nuff said",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642982/IMG_5413_di9nlr.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642973/IMG_0183_lig31e.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642972/IMG_0033_ecqeen.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643004/IMG_5428_iiaxwq.jpg",
                        caption: "clippers v. magic",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643026/IMG_8130_tct2ne.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642971/IMG_0025_a23ece.jpg",
                        caption: "late night snack pt.2",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643001/IMG_5432_fhimay.jpg",
                        caption: "scary movie (the conjuring)",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642984/IMG_5433_zalhwc.jpg",
                        caption: "needed to sleep in the same room as us",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643011/IMG_5436_uf46oi.jpg",
                        caption: "uncle dan's backyard",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643006/IMG_5439_sgrlqp.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643031/IMG_6737_cmo4jl.jpg",
                        caption: "fort lauderdale",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643024/IMG_6763_evo09r.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642977/IMG_4295_w2sfnn.jpg",
                        caption: "homemade",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643007/IMG_5450_er9nzu.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643008/IMG_5457_k8j7od.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643012/IMG_5462_ecn2sn.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642974/IMG_2831_qujztb.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643013/IMG_5468_e01vgb.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643014/IMG_5492_jv9j68.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643019/IMG_5505_iz3g8q.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643016/IMG_5512_dji9qt.jpg",
                        caption: "",
                        orientation: "v"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642986/IMG_5472_koznit.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642988/IMG_5492_1_mofzat.jpg",
                        caption: "staged",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764642976/IMG_2954_vr1jz9.jpg",
                        caption: "",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643020/IMG_5549_ybyauz.jpg",
                        caption: "back to orlando",
                        orientation: "h"
                    },
                    {
                        filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764643022/IMG_5556_ruyljl.jpg",
                        caption: "thanks florida",
                        orientation: "v"
                    }

                ]
            }
        ]
    }
];
