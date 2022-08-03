import { useState } from "react";
import { useForm } from "react-hook-form";
import { Option } from "../../components/Dropdown";
import { database } from "../../database";
import { OwnerModel } from "../../database/model/ownerModel";
import { PurchaserModel } from "../../database/model/purchaserModel";

type CreateOwnerData = {
  name: string;
  phone: string;
  description: string;
  method: string;
  value: string;
  street: string;
  city: string;
  district: string;
  number: number;
};

type CreatePurchaserData = {
  name: string;
  phone: string;
  description: string;
  method: string;
  value: string;
  city: string;
  region: string;
}

type ToastType = 'error' | 'success';

export function useRegisterClient() {
  const [isOwnerActivate, setIsOwnerActivate] = useState(false);
  const [isPurchaserActivate, setIsPurchaserActivate] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleOnPurchaser = () => {
    setIsPurchaserActivate(!isPurchaserActivate);
    setIsOwnerActivate(false);
  }

  const handleOnOwner = () => {
    setIsOwnerActivate(!isOwnerActivate);
    setIsPurchaserActivate(false);
  }

  const getUserDataSelect = (option: Option) => {

    if (option.data === "rent") {
      setSelectedMethod("rent");
    }

    setSelectedMethod("buy");
  };


  const getPropertyDataSelect = (option: Option) => {
    if (option.data === "north") {
      setSelectedRegion("north");
    }

    if (option.data === "south") {
      setSelectedRegion("south");
    }

    if (option.data === "west") {
      setSelectedRegion("west");
    }

    if (option.data === "east") {
      setSelectedRegion("east");
    }

    setSelectedRegion("center");
  };

  async function handleCreateOwner(data: CreateOwnerData) {
    try {
      await database.write(async () => {
        await database.get<OwnerModel>('owners').create(owner => {
          owner.name = data.name,
            owner.city = data.city,
            owner.description = data.description,
            owner.phone = data.phone,
            owner.district = data.district,
            owner.number = data.number,
            owner.street = data.street,
            owner.created_at = Number(new Date()),
            owner.method = selectedMethod,
            owner.value = data.value
        });
      });

      setMessage('Cliente cadastrado com sucesso');
      setShowModal(!showModal);
    } catch (error) {
      setMessage('Erro ao cadastrar cliente');
      setShowModal(!showModal);
    }
  }

  async function handleCreatePurchaser(data: CreatePurchaserData) {
    try {
      await database.write(async () => {
        await database.get<PurchaserModel>('purchasers').create(purchaser => {
          purchaser.name = data.name,
            purchaser.city = data.city,
            purchaser.description = data.description,
            purchaser.phone = data.phone,
            purchaser.created_at = Number(new Date()),
            purchaser.method = selectedMethod,
            purchaser.value = data.value,
            purchaser.region = selectedRegion
        })
      });

      setMessage('Cliente cadastrado com sucesso');
      setShowModal(!showModal);
    } catch (error) {
      setMessage('Erro ao cadastrar cliente');
      setShowModal(!showModal);
    }
  }

  return {
    isOwnerActivate,
    isPurchaserActivate,
    handleOnPurchaser,
    handleOnOwner,
    handleCreatePurchaser,
    handleCreateOwner,
    message,
    showModal,
    setShowModal,
    getUserDataSelect,
    getPropertyDataSelect
  }
}