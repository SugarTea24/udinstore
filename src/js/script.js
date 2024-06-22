document.addEventListener("DOMContentLoaded", () => {
  const products = [
    //!   netflix
    {
      section: "netflix",
      title: "netflix",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 30.000",
          image: "netflix.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+netflix+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "sharing",
          duration: "3 bulan",
          price: "rp. 90.000",
          image: "netflix.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+netflix+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 135.000",
          image: "netflix.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+netflix+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "private",
          duration: "3 bulan",
          price: "rp. 410.000",
          image: "netflix.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+netflix+ready?&type=phone_number&app_absent=0",
        },
      ],
    },
    //!      prime video
    {
      section: "prime-video",
      title: "prime video",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 10.000",
          image: "prime-video.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+prime+video+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 35.000",
          image: "prime-video.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+prime+video+ready?&type=phone_number&app_absent=0",
        },
      ],
    },
    //!      drakor id
    {
      section: "drakor-id",
      title: "drakor id",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 25.000",
          image: "drakor-id.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+drakor+id+ready?&type=phone_number&app_absent=0",
        },
      ],
    },
    //!      genflix
    {
      section: "genflix",
      title: "genflix",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 10.000",
          image: "genflix.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+genflix+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 40.000",
          image: "genflix.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+genflix+ready?&type=phone_number&app_absent=0",
        },
      ],
    },
    //!      hbo go
    {
      section: "hbo-go",
      title: "hbo go",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 15.000",
          image: "hbo-go.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+HBOGO+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 60.000",
          image: "hbo-go.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+HBOGO+ready?&type=phone_number&app_absent=0",
        },
      ],
    },
    // !  WE TV
    {
      section: "we-tv",
      title: "we tv",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 7.000",
          image: "wetv.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+WETV+sharing+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "sharing",
          duration: "3 bulan",
          price: "rp. 10.000",
          image: "wetv.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+WETV+sharing+ready?&type=phone_number&app_absent=0",
        },
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 16.000",
          image: "wetv.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+WETV+sharing+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // !  WE TV
    // ! Vidio
    {
      section: "vidio",
      title: "vidio",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan TV only",
          price: "rp. 20.000",
          image: "vidio.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+vidio+sharing+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 bulan All Device",
          price: "rp. 25.000",
          image: "vidio.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+vidio+sharing+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 35.000",
          image: "vidio.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+vidio+private+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! vidio
    // ! VIU
    {
      section: "viu",
      title: "viu",
      color: "white",
      items: [
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 5.000",
          image: "viu.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Viu+private+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "3 bulan",
          price: "rp. 10.000",
          image: "viu.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Viu+private+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "6 bulan",
          price: "rp. 13.000",
          image: "viu.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Viu+private+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "1 tahun",
          price: "rp. 16.000",
          image: "viu.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Viu+private+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! VIU
    // ! Loklok
    {
      section: "loklok",
      title: "loklok",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 10.000",
          image: "loklok.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+loklok+sharing+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "3 bulan",
          price: "rp. 13.000",
          image: "loklok.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+loklok+shariViu+bulan+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! loklok
    // ! bstation
    {
      section: "bstation",
      title: "bstation",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 10.000",
          image: "bstation.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Bstation+sharing+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 20.000",
          image: "bstation.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Bstation+sharing+1+tahun+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! bstation
    // ! youku
    {
      section: "youku",
      title: "youku",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 10.000",
          image: "youku.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+youku+sharing+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "3 bulan",
          price: "rp. 15.000",
          image: "youku.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+youku+sharing+3+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 20.000",
          image: "youku.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+youku+sharing+1+tBstation+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! youku
    // ! vision
    {
      section: "vision",
      title: "vision",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 18.000",
          image: "vision.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+vision+sharing+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "1 bulan",
          price: "rp. 40.000",
          image: "vision.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+vision+private+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! vision
    // ! iqiyi
    {
      section: "iqiyi",
      title: "iqiyi",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 8.000",
          image: "IQIYI.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Iqiyi+sharing+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 20.000",
          image: "IQIYI.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+Iqiyi+sharing+1+tahun+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! iqiyi
    // ! disney
    {
      section: "disney",
      title: "disney",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 25.000",
          image: "disney.jpg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+disney+sharing+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "2 bulan",
          price: "rp. 50.000",
          image: "disney.jpg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+disney+sharing+2+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "3 bulan",
          price: "rp. 70.000",
          image: "disney.jpg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+disney+sharing+3+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "1 bulan premium",
          price: "rp. 140.000",
          image: "disney.jpg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+disney+private+1+bulan+premium+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "private",
          duration: "1 bulan basic",
          price: "rp. 85.000",
          image: "disney.jpg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+disney+private+1+bulan+basic+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // !disney
    // ! youtube
    {
      section: "youtube",
      title: "youtube",
      color: "white",
      items: [
        {
          type: "famplan",
          duration: "1 bulan",
          price: "rp. 5.000",
          image: "youtube.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+yt+famplan+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "2 bulan",
          price: "rp. 8.000",
          image: "youtube.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+yt+famplan+2+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "3 bulan",
          price: "rp. 12.000",
          image: "youtube.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+yt+3+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "indplan",
          duration: "3 bulan",
          price: "rp. 25.000",
          image: "youtube.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+yt+indplan+3+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "indplan",
          duration: "4 bulan ",
          price: "rp. 35.000",
          image: "youtube.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+yt+indplan+4+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "indplan",
          duration: "6 bulan",
          price: "rp. 20.000",
          image: "youtube.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+yt+indplan+6+bulan+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! youtube
    // ! spotify
    {
      section: "spotify",
      title: "spotify",
      color: "white",
      items: [
        {
          type: "famplan",
          duration: "19 hari",
          price: "rp. 7.000",
          image: "spotify.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+spotify+famplan+19+hari+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "1 bulan",
          price: "rp. 7.000",
          image: "spotify.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+spotify+famplan+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "2 bulan",
          price: "rp. 14.000",
          image: "spotify.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+spotify+famplan+2+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "3 bulan",
          price: "rp. 20.000",
          image: "spotify.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+spotify+famplan+3+bulan+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! spotify
    // ! apple music
    {
      section: "applemusic",
      title: "apple music",
      color: "white",
      items: [
        {
          type: "famplan",
          duration: "1 bulan",
          price: "rp. 15.000",
          image: "applemusic.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+apple+music+famplan+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! apple music
    // ! tiktok music
    {
      section: "tiktokmusic",
      title: "tiktok music",
      color: "white",
      items: [
        {
          type: "famplan",
          duration: "1 bulan",
          price: "rp. 10.000",
          image: "tiktok.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+tiktok+famplan+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "2 bulan",
          price: "rp. 16.000",
          image: "tiktok.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+tiktok+famplan+2+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "famplan",
          duration: "3 bulan",
          price: "rp. 25.000",
          image: "tiktok.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+tiktok+famplan+3+bulan+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! tiktok music
    // ! vsco
    {
      section: "vsco",
      title: "vsco",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 tahun plus",
          price: "rp. 20.000",
          image: "vsco.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+VSCO+sharing+1+tahun+plus+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 tahun pro",
          price: "rp. 30.000",
          image: "vsco.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+VSCO+sharing+1+tahun+pro+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! vsco
    // ! canva
    {
      section: "canva",
      title: "canva",
      color: "white",
      items: [
        {
          type: "Anggota",
          duration: "1 bulan",
          price: "rp. 5.000",
          image: "canva.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+canva+anggota+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "Anggota",
          duration: "6 bulan",
          price: "rp. 10.000",
          image: "canva.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+apakah+canva+anggota+6+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "Anggota",
          duration: "1 tahun",
          price: "rp. 15.000",
          image: "canva.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+apakah+canva+anggota+1+tahun+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "Designer",
          duration: "1 bulan",
          price: "rp. 6.000",
          image: "canva.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+apakah+canva+designer+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "Designer",
          duration: "6 bulan",
          price: "rp. 12.000",
          image: "canva.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+apakah+canva+designer+6+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "Designer",
          duration: "1 tahun",
          price: "rp. 16.000",
          image: "canva.png",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+apakah+canva+designer+1+tahun+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! canva
    // ! capcut
    {
      section: "capcut",
      title: "capcut",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 bulan",
          price: "rp. 15.000",
          image: "capcut.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+capcut+1+bulan+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 25.000",
          image: "capcut.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+capcut+1+tahun+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! capcut
    // ! remini
    {
      section: "remini",
      title: "remini",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 tahun lite",
          price: "rp. 25.000",
          image: "remini.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+remini+ready?&type=phone_number&app_absent=0/",
        },
        {
          type: "sharing",
          duration: "1 tahun pro",
          price: "rp. 30.000",
          image: "remini.webp",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+remini+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! remini
    // ! lightroom
    {
      section: "lightroom",
      title: "lightroom",
      color: "white",
      items: [
        {
          type: "sharing",
          duration: "1 tahun",
          price: "rp. 20.000",
          image: "lightroom.jpeg",
          link: "https://api.whatsapp.com/send/?phone=%2B6289523353487&text=Permisi+min%2C+apakah+lightroom+ready?&type=phone_number&app_absent=0/",
        },
      ],
    },
    // ! lightroom
  ];

  products.forEach((product) => {
    const section = document.getElementById(product.section);
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
      <h1 class="text-center uppercase text-${
        product.color
      } font-extrabold text-6xl">${product.title}</h1>
      <div class="flex gap-4 justify-center items-center flex-wrap mt-10">
        ${product.items
          .map(
            (item) => `
          <div class="relative flex flex-col bg-white p-8 rounded-2xl shadow-smInvFixed items-stretch text-center font-medium">
            <img class="bg-no-repeat bg-center bg-contain w-32 h-32 rounded-2xl" src="./src/assets/images/${item.image}" alt="${product.title}" />
            <h1 class="text-2xl font-semibold capitalize mt-4">${item.type}</h1>
            <p class="capitalize">${item.duration}</p>
            <p class="capitalize">${item.price}</p>
            <a href="${item.link}" class="bg-green-600 mt-2 p-2 rounded-lg text-white font-semibold shadow-smFixed hover:bg-green-500 duration-500">Order Here</a>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    section.appendChild(container);
  });
});
