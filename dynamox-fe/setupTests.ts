// src/setupTests.js ou diretamente no arquivo de teste
import { server } from "@/services/mock-api";


// Estabelecendo o servidor para interceptar as requisições antes dos testes
beforeAll(() => server.listen());  // Inicia o servidor antes de todos os testes

afterEach(() => server.resetHandlers()); // Reseta os handlers após cada teste (para evitar conflitos)

afterAll(() => server.close()); // Fecha o servidor após todos os testes
