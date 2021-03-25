import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it("should be able to list the provider's month availability", async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      date: new Date(2021, 1, 24, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      date: new Date(2021, 2, 24, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      date: new Date(2021, 2, 24, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'provider',
      date: new Date(2021, 2, 26, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'provider',
      year: 2021,
      month: 3,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 24, available: false },
        { day: 26, available: false },
        { day: 20, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
