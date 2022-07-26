import { useState } from "react";
import { database } from "../../database";
import { OwnerModel } from "../../database/model/ownerModel";

type ClientType = 'owner' | 'purchaser';

type CreateOwnerData = {
  name: string;
  phone: string;
  description: string;
  method: string;
  created_at: string;
  value: number;
  street: string;
  city: string;
  district: string;
  number: number;
}

export function useRegisterClient() {
  const [isOwnerActivate, setIsOwnerActivate] = useState(false);
  const [isPurchaserActivate, setIsPurchaserActivate] = useState(false);

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

  return {
    isOwnerActivate,
    setIsOwnerActivate,
    isPurchaserActivate,
    setIsPurchaserActivate
  }
}