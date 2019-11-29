import '../fonts/DINosaur-Regular.otf';
import '../fonts/DINosaur-RegularItalic.otf';
import '../fonts/DINosaur-Medium.otf';
import '../fonts/DINosaur-MediumItalic.otf';
import '../fonts/DINosaur-Bold.otf';
import '../fonts/DINosaur-BoldItalic.otf';
import '../fonts/DINosaur-Thin.otf';
import '../fonts/DINosaur-ThinItalic.otf';
import matheosTheme from 'themes/matheos.js';

const theme = {
  font: {
    main: "'DINosaur', sans-serif",
    menu: "'DINosaur', sans-serif",
    button: "'Roboto', sans-serif",
    cursive: "'Dancing Script', cursive",
  },
  color: {
    color1: "#269ed8",
    color2: "#d74589",
    color3: "#716da5",
    color4: "#e99547",
    color5: "#51cef4",
    color6: "#f1f2f2",
    darker: {
      color1: "#009c5e",
      color2: "#204da9",
      color3: "#7b0067",
      color4: "#e20000",
      color5: "#eb4d1d",
      color6: "#005988",
    }
  }
};

const oToi = {
  font: {
    // menu: "'Nunito', sans-serif",
    button: "'Nunito', sans-serif",
    // cursive: "'Patrick Hand', cursive;",
  },
  color: {
    menu: "#8161b6",
    page1: "#3f2362",
    page2: "#45c0d6",
    page3: "#6c3ea8",
    page4: "#ff4da3",
    page5: "#ffdf5e",
    page6: "#fff",
    page7: "#f5effc",
    page8: "#966ed9",
    page9: "#6c3ea8",
    footer: "#3f2362",
    title1: "#45c0d6",
  }
}

function merge(obj1, obj2) {
  if(!(obj2 instanceof Object)) return;
  Object.keys(obj2).forEach(key => {
    if(obj1[key] instanceof Object) merge(obj1[key], obj2[key]);
    else obj1[key] = obj2[key];
  });
}

merge(theme, matheosTheme);
// merge(theme, oToi);

export default theme;