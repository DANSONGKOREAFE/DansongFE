import React, { useContext } from 'react';
import { ModalsStateContext } from '../../Context/ModalsContext';

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  return openedModals.map((modal, index) => {
    const { Component, props } = modal;

    console.log(Component);

    return <Component key={index} {...props} />;
  });
}