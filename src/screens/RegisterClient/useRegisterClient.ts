import { useState } from "react";
import { useForm } from "react-hook-form";
import { database } from "../../database";
import { OwnerModel } from "../../database/model/ownerModel";
import { PurchaserModel } from "../../database/model/purchaserModel";

type CreateOwnerData = {
  name: string;
  phone: string;
  description: string;
  method: string;
  value: number;
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
  value: number;
  city: string;
  region: string;
}

export function useRegisterClient() {
  const [isOwnerActivate, setIsOwnerActivate] = useState(false);
  const [isPurchaserActivate, setIsPurchaserActivate] = useState(false);

  const handleOnPurchaser = () => {
    setIsPurchaserActivate(!isPurchaserActivate);
    setIsOwnerActivate(false);
  }

  const handleOnOwner = () => {
    setIsOwnerActivate(!isOwnerActivate);
    setIsPurchaserActivate(false);
  }

  async function handleCreateOwner(data: CreateOwnerData) {
    await database.get<OwnerModel>('owners').create(owner => {
      owner.name = data.name,
        owner.city = data.city,
        owner.description = data.description,
        owner.phone = data.phone,
        owner.district = data.district,
        owner.number = data.number,
        owner.street = data.street,
        owner.created_at = Number(new Date()),
        owner.method = data.method,
        owner.value = data.value
    })
  }

  async function handleCreatePurchaser(data: CreatePurchaserData) {
    console.log(data.name);

    await database.write(async () => {
      await database.get<PurchaserModel>('purchasers').create(purchaser => {
        purchaser.name = data.name,
          purchaser.city = data.city,
          purchaser.description = data.description,
          purchaser.phone = data.phone,
          purchaser.created_at = Number(new Date()),
          purchaser.method = data.method,
          purchaser.value = data.value,
          purchaser.region = data.region
      })
    });
  }

  return {
    isOwnerActivate,
    isPurchaserActivate,
    handleOnPurchaser,
    handleOnOwner,
    handleCreatePurchaser
  }
}