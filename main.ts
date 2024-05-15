import express, { Request, Response } from "npm:express@4.18.2";
import axios from "axios";

const app = express();

app.get(
    "/:mat",
    async (req: Request, res: Response) => {
      try {
        const matricula = req.params.mat;
        const apiUrl = `https://api.mister-auto.com/v1/vehicle/global-plates/v2/ES/${matricula}`;

      const headers = {
        'Host': 'api.mister-auto.com',
        'Accept': 'application/json',
        'token-plate': '56C4F6C14A3AD78C78F448ACE8D6F',
        'Connection': 'keep-alive',
        'Accept-Language': 'en-GB,en;q=0.9',
        'only-ktype': 'false',
        'User-Agent': 'NewAppMA.UI/3800 CFNetwork/1496.0.7 Darwin/23.5.0'
      };

      const response = await axios.get(apiUrl, { headers });
      const apiData = response.data;
      const formattedData = {
        marca: apiData.make || 'null',
        modelo: apiData.model || 'null',
        version: apiData.version || 'null',
        Primer_Registro: apiData.first_registration_date || 'null',
        Combustible: apiData.fuel_type || 'null',
        Caballos: apiData.max_net_power_hp || 'null',
        Automatico_Manual: apiData.type_of_clutch || 'null',
        Año_Fabricacion: apiData.model_year_of_construction || 'null',
        VIN: apiData.vin || 'null'
      };
      res.status(200).json(formattedData);
      } catch (e) {
        res.status(500).send(e.message);
      }
    }
  );

app.listen(3000, () => {
  console.log("Listening");
});