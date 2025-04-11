import { useEffect, useState } from "react";
import { UserData } from "../../model/userData";
import { UserStorageService } from "../../model/auth/UserStorageService";

export const useUserViewModel = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isPageLoading, setIsPageLoading] = useState(true);
  
    useEffect(() => {
      UserStorageService.loadUserData() // Выносим логику в Model-слой
        .then(setUserData)
        .finally(() => setIsPageLoading(false));
    }, []);
  
    return { userData, isPageLoading };
  };