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
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539411/IMG_9247_ez7vlm.jpg",
                caption: "",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539424/IMG_9258_rhfpfb.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764539899/IMG_9505_svnwo2.jpg",
                caption: "",
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
                caption: "",
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
                caption: "",
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
                caption: "",
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
                caption: "aftermath of wine & cheese night",
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
                caption: "taverna",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536409/11_yctori.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536406/12_xalxsw.jpg",
                caption: "indian creek farm",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764536407/13_lmr5oj.jpg",
                caption: "",
                orientation: "h"
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
                caption: "",
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
                caption: "Theo! keep your hands to... yourself?",
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
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541461/IMG_7662_lv6gat.jpg",
                caption: "prayer posture",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541458/IMG_7673_hc3bjq.jpg",
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541462/IMG_7682_irbkbf.jpg",
                caption: "",
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
                caption: "",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541466/IMG_7798_ylbozw.jpg",
                caption: "the handoff",
                orientation: "v"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541464/IMG_7816_slyb2x.jpg",
                caption: "yummy",
                orientation: "h"
            },
            {
                filename: "https://res.cloudinary.com/doypjterz/image/upload/v1764541467/IMG_7817_pfjf6z.jpg",
                caption: "",
                orientation: "v"
            }
        ]
    }
];
