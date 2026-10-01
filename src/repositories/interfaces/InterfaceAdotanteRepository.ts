import AdotanteEntity from '../../entities/AdotanteEntity';

type TipoEndereco = {
  cidade: string;
  estado: string;
};

export default interface InterfaceAdotanteRepository {
  criaAdotante(adotante: AdotanteEntity): void | Promise<void>;
  listaAdotante(): AdotanteEntity[] | Promise<AdotanteEntity[]>
  atualizaAdodante(id: number, adotante: AdotanteEntity): Promise<{ success: boolean; message?: string }> | void;
  atualizaEnderecoAdotante(id: number, endereco: TipoEndereco): Promise<{ success: boolean; message?: string }> | void;
  deletaAdotante(id: number): Promise<{ success: boolean; message?: string }> | void;
}