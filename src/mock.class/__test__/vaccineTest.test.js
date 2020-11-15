import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});
const vaccine = new VaccineTest();
describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    vaccine.inject();
    //  14: add test here
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    //  15: add test here
    mockGetHasAntibodies.mockReturnValueOnce(true);
    expect(vaccine.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // 16: add test here
    mockGetHasAntibodies.mockReturnValueOnce(false);
    expect(vaccine.test()).toBe("Vaccine Test Failed");
  });
});
