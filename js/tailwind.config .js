tailwind.config = {
    theme: {
      extend: {
        colors: {
          navColor: ' rgba(22, 12, 109, 0.5)',
          hoverColor: ' #1BBF00',
          overlyColor:'rgba(106, 98, 197, 0.9)'
        },
        maxWidth: {
           
          'headerContainer': '1170px',
          'bannerContainer': '960px',
          'counterContainer': '1210px',
          'whyContainer': '1170px',

          },
          // width: {
          //   'logoW': '10%',
          // },
          fontFamily: {
            'open': [' "Open Sans"'],
            'papri': [' "Paprika"'],
          },
          // background img
          backgroundImage: {
            'bannerImg': "url('images/bg.jpg')",
            'counterbg': "url('images/counterbg.png')",
            'whybg': "url('images/whybg.png')",
            
          }
        
          // backgroung img
      }
    }
  }