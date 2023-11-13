"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import necessary modules
const axios_1 = __importDefault(require("axios"));
const index_1 = __importDefault(require("../src/index"));
// Mock axios
jest.mock('axios');
const mockedAxios = axios_1.default;
// Define your test suite
describe('ColissimoAPI', () => {
    describe('findRDVPointRetraitAcheminement', () => {
        it('should fetch data successfully from the API', () => __awaiter(void 0, void 0, void 0, function* () {
            // Mock data to simulate a successful API response
            const mockData = {
                status: 'success',
                data: {
                    points: [
                        {
                            id: '123',
                            name: 'Point A',
                            address: 'Address A',
                            zipCode: 'ZipCode A',
                            city: 'City A',
                            countryCode: 'Country A',
                        },
                        // Add more mock points as needed
                    ],
                },
            };
            // Mock the axios GET request
            mockedAxios.get.mockResolvedValue({ data: mockData });
            // Instantiate your API wrapper class
            const api = new index_1.default();
            // Call the method with mock parameters
            const response = yield api.findRDVPointRetraitAcheminement({ /* your mock params here */});
            // Assertions to test method functionality
            expect(response).toEqual(mockData);
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
            // Add more assertions as necessary
        }));
        // Add more tests, for example, to handle error responses
    });
});
