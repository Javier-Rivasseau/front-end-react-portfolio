
export interface MenuItemData {
    label: string;
    to: string;
    children?: MenuItemData[];
  }

  const menus: MenuItemData[] = [
    {
      label: "Home",
      to: "/",
    },   
    {
      label: "About",
      to: "/about",
      children: [
        {
          label: "Team",
          to: "team",
          children: [
            {
              label: "Management",
              to: "management",
              children: [
                {
                  label: "Leadership",
                  to: "leadership",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Services",
      to: "/services",
      children: [
        {
          label: "Consulting",
          to: "consulting",
        },
        {
          label: "Development",
          to: "development",
          children: [
            {
              label: "Web Development",
              to: "web-development",
            },
            {
              label: "App Development",
              to: "app-development",
              children : [
                  {
                      label : 'iOS Development',
                      to : 'ios-development'
                  },
                  {
                      label : 'Android Development',
                      to : 'android-development'
                  },
              ]
            },
          ],
        },
      ],
    },
  ];

  export default menus