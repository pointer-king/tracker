let counter = 1;
while (counter <= 100) {
    const incrementedValue = 12022024 + counter - 1;
    const incrementedRegistration = `test12022024${(counter).toString().padStart(3, '0')}`;
    const incrementedField3 = 12022024786 + counter - 1;

    // feature change
    let feature = 'second';
    console.log(feature)

    const queryString = `EXECUTE [dbo].[CreateTrips_test] '65B0', 'E13E', '81', '1', 'LTL', '', '0097100841', '${incrementedRegistration}', '${incrementedValue}', '${incrementedField3}', '2024-02-09 04:02', '1245588178', '9037', '1000000765', 'YF61', 'AW2310010779', '1000157678', 'Bosch Ltd.', 'Bangalore', 000003, 'F002F90005079', 'Service kit', '14146180283UC', 'ST', 100, 'KG', 21.518, 21.518, 00001, 'SAP';`;

    console.log(queryString);

    counter++;
}