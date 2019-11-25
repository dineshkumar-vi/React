
 

// Header Menu Data 
export const userMenu = (callbackAction, user, lang) => {

  let leftmenuItems = [];
  leftmenuItems.push(buildMenuItems(true, "personal",  null, false, true));
  leftmenuItems.push(buildMenuItems(true, "business",  null, false, false));
  
  let rightMenuItems = [];
  rightMenuItems.push(buildMenuItems(true, "search",  "Search", false, false, null ));
  rightMenuItems.push(buildMenuItems(true, "contactus",  "Contact Us", false, false,  null ));
  rightMenuItems.push(buildMenuItems(true, "signin", null, false, false ));
  rightMenuItems.push(buildMenuItems(true, "language", lang , false, false ));
  
  callbackAction(leftmenuItems , rightMenuItems, lang);

};

const buildMenuItems= (visible, tag, label, isLoggedIn, active, imageIcon) => {
  let menu = {};
  // Specifies if the menu is visible or not
  menu.visible = visible;
  // Navigation URL of the icon
  menu.tag =  tag;
  // This value will be used as text for AODA compliance
  menu.label = label;
  // Specifies if the user is logged in or not 
  menu.isLoggedIn = isLoggedIn;

  if(imageIcon) {
    //  Name of the icon to render on the component
    menu.imageIcon = imageIcon;
  }

  menu.active = active;

  return menu;

};