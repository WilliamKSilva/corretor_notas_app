import { useState } from "react";

type ClientType = 'owner' | 'purchaser';

export function useRegisterClient() {
  const [selectedClientType, setSelectedClientType] = useState<ClientType>(null);

  return {
    selectedClientType,
    setSelectedClientType
  }
}