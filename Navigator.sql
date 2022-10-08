CREATE table institutes
{
	instID UUID,
    instName VARCHAR(128) NOT NULL,
    photoUrl VARCHAR(256)
};


INSERT INTO institutes
VALUES
(gen_random_uuid() ,'ИРИТ-РТФ', 'https://sun9-north.userapi.com/sun9-83/s/v1/ig2/uFw_vF_yE-VDBVXBKEmP_dcDuVie_5VHGGqYV0ENCR644e9spnCTh8lN6OEtDfjS4qdH_iCWqyLIlOKAxQq8o48J.jpg')

SELECT *
FROM institutes

delete from institutes
WHERE instId is null;