import React , {useState, createContext} from 'react';

export const SidebarContenxt = createContext();
const SidebarProvider = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  return <SidebarContenxt.Provider value={{isOpen, setIsOpen, handleClose}}>
    {children}
  </SidebarContenxt.Provider>;
};

export default SidebarProvider;
