import { useState } from "react";
import { Option } from "../../components/Dropdown";
import { database } from "../../database";
import { ClientModel } from "../../database/model/clientModel";

type CreateClientData = {
  name: string;
  phone: string;
  district: string;
  method: string;
  value: string;
  city: string;
}

export function useRegisterClient() {
  const [isPurchaserActive, setIsPurchaserActive] = useState(false);
  const [isTenantActive, setIsTenantActive] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleOnPurchaser = () => {
    setSelectedMethod('purchaser');
    setIsPurchaserActive(!isPurchaserActive);
    setIsTenantActive(false);
  }

  const handleOnTenant = () => {
    setSelectedMethod('tenant');
    setIsTenantActive(!isTenantActive);
    setIsPurchaserActive(false);
  }

  console.log(selectedMethod);

  async function handleCreateClient(data: CreateClientData) {

    try {
      await database.write(async () => {
        await database.get<ClientModel>('clients').create(client => {
          client.name = data.name,
            client.city = data.city,
            client.district = data.district,
            client.phone = data.phone,
            client.method = selectedMethod,
            client.value = data.value
        });
      });

      setMessage('Cliente cadastrado com sucesso');
      setShowModal(!showModal);
    } catch (error) {
      setMessage('Erro ao cadastrar cliente');
      setShowModal(!showModal);
    }
  }

  return {
    handleOnPurchaser,
    handleOnTenant,
    handleCreateClient,
    message,
    showModal,
    setShowModal,
    isPurchaserActive,
    isTenantActive
  }
}