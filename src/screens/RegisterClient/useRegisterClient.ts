import { useState } from "react";
import { useForm } from "react-hook-form";
import { Option } from "../../components/Dropdown";
import { database } from "../../database";
import { TenantModel } from "../../database/model/tenantModel";
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

  async function handleCreateTenant(data: CreateOwnerData) {
    try {
      await database.write(async () => {
        await database.get<TenantModel>('tenants').create(tenant => {
          tenant.name = data.name,
            tenant.city = data.city,
            tenant.description = data.description,
            tenant.phone = data.phone,
            tenant.district = data.district,
            tenant.number = data.number,
            tenant.street = data.street,
            tenant.created_at = Number(new Date()),
            tenant.method = selectedMethod,
            tenant.value = data.value
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
    handleCreateTenant,
    message,
    showModal,
    setShowModal,
    getUserDataSelect,
    getPropertyDataSelect
  }
}