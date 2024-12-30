// import Cross from '../../src/assets/images/svg/cross.svg';
// import Done from '../../src/assets/images/svg/done.svg';
import { Done, Cross } from "./icons";

export const CARDS_LIST = [
    {
        heading : 'Card one',
        description : 'This is card one'
    }, 
    {
        heading : 'Card two',
        description : 'This is card two'
    },
    {
        heading : 'Card three',
        description : 'This is card three'
    }
]
export const COMPETITION_LIST = [
    {
      brand: "Mobile App",
      rift: <Cross />,
      taxscout: <Cross />,
      coconut: <Done />,
      pie: <Done />,
    },
    {
      brand: "Invoicing",
      rift: <Cross />,
      taxscout: <Cross />,
      coconut: <Done />,
      pie: <Done />,
    },
    {
      brand: "Bookkeeping",
      rift: <Cross />,
      taxscout: <Cross />,
      coconut: <Done />,
      pie: <Done />,
    },
    {
      brand: "Accountancy support",
      rift: <Done />,
      taxscout: <Done />,
      coconut: <Cross />,
      pie: <Done />,
    },
    {
      brand: "Tax Filing",
      rift: <Done />,
      taxscout: <Done />,
      coconut: <Done />,
      pie: <Done />,
    },
    {
      brand: "Fee",
      rift: "Est: £300 per year",
      taxscout: "£300 per year",
      coconut: "£9.00 p/m £108 per year",
      pie: "£6.99 or £9.99p/m £59.99 review fee £143.87 per year",
    },
  ];
  